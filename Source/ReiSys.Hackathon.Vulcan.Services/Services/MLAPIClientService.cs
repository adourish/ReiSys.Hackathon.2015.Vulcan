using ReiSys.Hackathon.Vulcan.Services.Services;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ReiSys.Hackathon.Vulcan.Services.Factory
{
    /// <summary>
    /// 
    /// </summary>
    public class MLAPIClientService : IMLAPIClientService
    {

        /// <summary>
        /// get client data
        /// </summary>
        /// <param name="scoreRequest"></param>
        /// <param name="baseUrl"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        public string GetClientData(object scoreRequest, string baseUrl, string key)
        {
            string result = "";
            using (var client = new HttpClient())
            {

                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", key);
                client.BaseAddress = new Uri(baseUrl);
                HttpResponseMessage response = client.PostAsJsonAsync("", scoreRequest).Result;
                if (response.IsSuccessStatusCode)
                {
                    result = response.Content.ReadAsStringAsync().Result;
                    Console.WriteLine("Result: {0}", result);
                }
                else
                {
                    Console.WriteLine(string.Format("The request failed with status code: {0}", response.StatusCode));
                    // Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
                    Console.WriteLine(response.Headers.ToString());
                    result =  response.Content.ReadAsStringAsync().Result;
                    Console.WriteLine(result);
                }
                return result;
            }
        }

        public async Task InvokeRequestResponseService(object scoreRequest, string baseUrl, string key)
        {
            using (var client = new HttpClient())
            {                                
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", key);

                client.BaseAddress = new Uri(baseUrl);


                HttpResponseMessage response = await client.PostAsJsonAsync("", scoreRequest);

                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("Result: {0}", result);
                }
                else
                {
                    Console.WriteLine(string.Format("The request failed with status code: {0}", response.StatusCode));

                    // Print the headers - they include the requert ID and the timestamp, which are useful for debugging the failure
                    Console.WriteLine(response.Headers.ToString());

                    string responseContent = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseContent);
                }
            }
        }

    }
}
