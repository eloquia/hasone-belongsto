import { ColorModel, FlowerModel } from '../models';

export class FlowerRepository {
  private flowerModel;

  constructor(fm: FlowerModel) {
    this.flowerModel = fm;
  }

  public async getAllFlowers() {
    const flowerModels = await this.flowerModel.findAll({
      include: [
        {
          model: ColorModel,
          as: 'color',
        },
      ],
    });

    return flowerModels;
  }
}