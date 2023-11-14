import { auth } from "../authentication/firebase";
import { SignIn } from "../utils/helper";

import { PrivateProps } from "../types/types";

const PrivateRoute = ({ children }: PrivateProps) => {
  return auth.currentUser ? children : <SignIn />;
};

export default PrivateRoute;
