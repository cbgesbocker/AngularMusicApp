import { UserState } from "./user/store/user.reducer";
import { LibrariesState } from "./libraries/libraries.reducer";
import { AdminState } from "./admin/store/admin.reducer";

export interface AppState {
  users: UserState;
  libraries: LibrariesState;
  admin: AdminState;
}
