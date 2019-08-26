exports.seed = function(knex, Promise) {
  return knex("users  ").insert([
    {
      email: "jacob1angulo@gmail.com",
      first_name: "John",
      last_name: "Doe",
      password: "$2a$05$3KA3WH/rGpib/OY4gcC/m.TINKwomxSTBmNVmpdAIFSijpAk/2vLK"
    }
  ]);
};
