using Orchard.UI.Resources;

namespace Moov2.Orchard.Ace {
    public class ResourceManifest : IResourceManifestProvider {
        public void BuildManifests(ResourceManifestBuilder builder) {
            var manifest = builder.Add();
            manifest.DefineStyle("AceStyles").SetUrl("Styles.css");
            manifest.DefineScript("AceVendorJs").SetUrl("ace/ace.js").SetCdn("//cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js");
            manifest.DefineScript("AceJs").SetUrl("orchard.ace.min.js", "orchard.ace.js").SetDependencies(new string[] { "AceVendorJs" });
        }
    }
}