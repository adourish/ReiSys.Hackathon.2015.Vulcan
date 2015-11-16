using System.Threading.Tasks;

namespace ReiSys.Hackathon.Vulcan.Services.Services
{
    public interface IMLAPIClientService
    {
        string GetClientData(object scoreRequest, string baseUrl, string key);

        Task InvokeRequestResponseService(object scoreRequest, string baseUrl, string key);

    }
}
