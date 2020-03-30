import { ProfileModel, Profile } from "./profile"

test("can be created", () => {
  const instance: Profile = ProfileModel.create({})

  expect(instance).toBeTruthy()
})