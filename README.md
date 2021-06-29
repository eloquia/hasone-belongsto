# HasOne-BelongsTo[Many]

A sample repository to explore how the the following relationship works with v5 Sequelize-Typescript:

* Flower HasOne Color
* Color BelongsTo[Many] Flower

and how to get back a list of Flowers and their corresponding colors.

---

## Disclaimers

* The "many" is in brackets because I'm not sure if I have to use `@BelongsTo()` or `@BelongsToMany()`
* Omitted common code such as adding `models` to `SequelizeOptions`
* Using Postgres
