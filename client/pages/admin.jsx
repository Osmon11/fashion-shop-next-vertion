import React from "react";
import AdminContainer from "../containers/AdminContainer";
import { Dushboard } from "../components";
import withAuth from "../components/withPrivateRoute";

function Admin() {
  return (
    <AdminContainer>
      <Dushboard />
    </AdminContainer>
  );
}

export default withAuth(Admin);
