import SidescrollingPhotoGallery from "./SidescrollingPhotoGallery";

const BASE = "https://jackweaklyportfolio.s3.us-east-2.amazonaws.com/New+Portfolio";

const puppetTheater = Array.from({ length: 38 }, (_, i) => ({
      src: `${BASE}/Puppet+Theater/${i + 1}.png`,
      alt: `Puppet Theater ${i + 1}`,
}));

const shellCorp = Array.from({ length: 18 }, (_, i) => ({
      src: `${BASE}/Shell+Corp/${i + 1}.png`,
      alt: `Shell Corp ${i + 1}`,
}));

const roseInGoodFaith = Array.from({ length: 8 }, (_, i) => ({
      src: `${BASE}/Rose+In+Good+Faith/${i + 1}.png`,
      alt: `Rose In Good Faith ${i + 1}`,
}));

const elizabethBay = Array.from({ length: 17 }, (_, i) => ({
      src: `${BASE}/Elizabeth+Bay/${i + 1}.png`,
      alt: `Elizabeth Bay ${i + 1}`,
}));

export default function EcomPhotographs() {
      return (
              <div>
                    <h2 className="text-4xl font-semibold mb-6">Cut And Sew</h2>h2>
              
                    <h4 className="text-xl font-semibold mb-4">Puppet Theater</h4>h4>
                    <SidescrollingPhotoGallery photos={puppetTheater} />
              
                    <h4 className="text-xl font-semibold mb-4">Shell Corp.</h4>h4>
                    <SidescrollingPhotoGallery photos={shellCorp} />
              
                    <h4 className="text-xl font-semibold mb-4">Rose In Good Faith</h4>h4>
                    <SidescrollingPhotoGallery photos={roseInGoodFaith} />
              
                    <h4 className="text-xl font-semibold mb-4">Elizabeth Bay ltd.</h4>h4>
                    <SidescrollingPhotoGallery photos={elizabethBay} />
              </div>
            );
}
