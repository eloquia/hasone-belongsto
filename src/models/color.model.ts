import { AllowNull, BelongsTo, BelongsToMany, Column, DataType, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { FlowerModel } from '.';

@Table({ tableName: 'color' })
export class ColorModel extends Model<ColorModel> {
  @PrimaryKey
  @AllowNull(false)
  @Column({ defaultValue: DataType.UUIDV4, field: 'color_id', type: DataType.UUIDV4 })
  public colorId!: string;

  @AllowNull(false)
  @Column({ field: 'color_name', type: DataType.STRING })
  public colorName!: string;

  @BelongsTo(
    () => FlowerModel
  )
  public flower!: FlowerModel;

  /* ---------- Included with Sequelize ---------- */
  @Column({ field: 'created_at', type: DataType.DATE })
  public createdAt!: string;

  @Column({ field: 'updated_at', type: DataType.DATE })
  public updatedAt!: string;

  @Column({ field: 'updated_by', type: DataType.STRING })
  public updatedBy!: string;
}