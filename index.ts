class CreatedUpdatedDateModel {
  created: string;
  updated: string;
}

type Unarray<T> = T extends Array<infer U> ? U : T;

type Depth = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


type NestedKeyOf<ObjectType extends CreatedUpdatedDateModel, D extends Depth[number] = 3> =
  D extends 0 ?
    never :
    {
      [Key in keyof ObjectType & (string | number)]:
      ObjectType[Key] extends CreatedUpdatedDateModel | Array<CreatedUpdatedDateModel>
        ? `${Key}` | `${Key}.${NestedKeyOf<Unarray<ObjectType[Key]>, Depth[D]>}`
        : `${Key}`
    }[keyof ObjectType & (string | number)];
