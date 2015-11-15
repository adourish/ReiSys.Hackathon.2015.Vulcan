using ReiSys.Hackathon.Vulcan.Services.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReiSys.Hackathon.Vulcan.Services.Services
{
    public interface IMLAPIClientService
    {
        string GetClientData(object scoreRequest, string baseUrl, string key);

        Task InvokeRequestResponseService(object scoreRequest, string baseUrl, string key);

    }
}
