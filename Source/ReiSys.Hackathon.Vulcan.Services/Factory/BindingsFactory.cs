using Microsoft.Practices.Unity;
using ReiSys.Hackathon.Vulcan.Service.Services;
using ReiSys.Hackathon.Vulcan.Services.Factory;
using ReiSys.Hackathon.Vulcan.Services.Services;

namespace ReiSys.Hackathon.Vulcan.Services
{
    /// <summary>
    /// Bindings factory. 
    /// </summary>
    public class BindingsFactory
    {
        private static bool bindingsAreAdded;
        private static readonly object locker = new object();
        private static IUnityContainer unityContainer;

        /// <summary>
        /// use double check locking pattern to add bindings.
        /// </summary>
        public static void Add()
        {
            if (!bindingsAreAdded)
            {
                lock (locker)
                {
                    if (!bindingsAreAdded)
                    {
                        unityContainer = new UnityContainer();
                        unityContainer.RegisterType<IMLRegressionService, MLRegressionService>();
                        unityContainer.RegisterType<IMLAPIClientService, MLAPIClientService>();
                        bindingsAreAdded = true;
                    }
                }
            }
        }

        /// <summary>
        /// get instance of object.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static T InstanceOf<T>()
        {
            return unityContainer.Resolve<T>();
        }
    }
}
