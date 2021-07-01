import Jimp from "jimp";
import {
  easternHemisphereMapUrl,
  westernHemisphereMapUrl,
} from "../../lib/constants";

class MapData {
  public easternHemisphereMapData: Jimp | null = null;
  public westernHemisphereMapData: Jimp | null = null;

  public async generateMapData() {
    return Promise.all([
      Jimp.read(easternHemisphereMapUrl).then((data: Jimp) => {
        this.easternHemisphereMapData = data;
      }),
      Jimp.read(westernHemisphereMapUrl).then((data: Jimp) => {
        this.westernHemisphereMapData = data;
      }),
    ]);
  }
}

export const mapData = new MapData();