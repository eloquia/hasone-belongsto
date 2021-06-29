import { AllowNull, Column, DataType, ForeignKey, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { ColorModel } from '.';

@Table({ tableName: 'flower' })
export class FlowerModel extends Model<FlowerModel> {
  @PrimaryKey
  @AllowNull(false)
  @Column({ defaultValue: DataType.UUIDV4, field: 'flower_id', type: DataType.UUIDV4 })
  public flowerId!: string;

  @AllowNull(false)
  @Column({ field: 'flower_name', type: DataType.STRING })
  public flowerName!: string;

  @HasOne(
    () => ColorModel
  )
  public color!: ColorModel;

  @ForeignKey(
    () => ColorModel,
  )
  @AllowNull(false)
  @Column({ field: 'color_id', type: DataType.UUIDV4 })
  public colorId!: string;

  /* ---------- Included with Sequelize ---------- */
  @Column({ field: 'created_at', type: DataType.DATE })
  public createdAt!: string;

  @Column({ field: 'updated_at', type: DataType.DATE })
  public updatedAt!: string;

  @Column({ field: 'updated_by', type: DataType.STRING })
  public updatedBy!: string;
}
