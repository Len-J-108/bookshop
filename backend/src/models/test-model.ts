import { Schema, Model, model } from "mongoose";

interface ITest {
  title: string;
}

type TestModel = Model<ITest>;

const testSchema = new Schema<ITest, TestModel>({
  title: {
    type: String,
    required: true,
  },
});

const Test: TestModel = model<ITest, TestModel>("Test", testSchema);

export default Test;
