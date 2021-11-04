import { createConnection } from "typeorm";
import { User } from "./entity/User";

describe("db tests", () => {
    it("create user", async () => {
        const connection = await createConnection();
        const user = new User();
        user.firstname = "fname";
        user.lastname = "lname";
        user.classgroup="1A";
        user.studentnumber="123";
        user.nationality="Phil";
        await connection.manager.save(user);
    });
});