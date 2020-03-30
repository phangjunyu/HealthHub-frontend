import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */

const Weight = types.model({
  timestamp: types.string,
  weight: types.Date,
})

const Meal = types.model({
  mealType: types.string,
  mealName: types.string,
  mealTime: types.Date,
  calories: types.number,
  ingredients: types.array(types.string),
})

export const ProfileModel = types
  .model("Profile")
  .props({
    id: types.identifier,
    loginStatus: types.boolean,
    username: types.string,
    password: types.string,
    email: types.string,
    profile: types.model({
      gender: types.string,
      age: types.integer,
      height: types.number,
      weight: types.array(Weight),
      meal: types.array(Meal),
    }),
    activities: null,
    dianogses: null,
    prescriptions: null,
    sleepings: null,
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ProfileType = Instance<typeof ProfileModel>
export interface Profile extends ProfileType {}
type ProfileSnapshotType = SnapshotOut<typeof ProfileModel>
export interface ProfileSnapshot extends ProfileSnapshotType {}
