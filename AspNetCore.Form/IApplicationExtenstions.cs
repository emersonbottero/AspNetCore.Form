﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;

namespace AspNetCore.Form
{
    public static class IApplicationExtensions
    {
        public static IApplicationBuilder useFormEndpoint(this IApplicationBuilder app)
        {

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/Form", async context =>
                {
                    var _options = context.RequestServices.GetRequiredService<AddFormEndpointOptions>();

                    var result = new Dictionary<string, List<FormGroup>>();

                    var builder = new FormDataBuilder();

                    foreach (var assembly in _options.Assemblies)
                    {
                        foreach (var type in assembly.Assembly.GetTypes())
                        {
                            var Inputs = builder.Build(type);

                            if (Inputs.Count > 0)
                            {
                                result.Add(Char.ToLower(type.Name[0]) + type.Name.Substring(1), Inputs );
                            }
                        }
                    }


                    var temp = JsonSerializer.Serialize(result, new System.Text.Json.JsonSerializerOptions()
                    {
                        IgnoreNullValues = true,
                        PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase
                    });

                    await context.Response.WriteAsync(temp);

                });
            });
            return app;
        }
    }
}
