import { observable } from "mobx";

class TestStore {
  @observable counter = 0;
}

export default new TestStore();
