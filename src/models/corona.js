import axios from "axios";
import db from "../db";

class Corona {
  async total() {
    try {
      const data = await db.fetch("total");
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async countries() {
    try {
      const data = await db.fetch("countries");
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Corona;
