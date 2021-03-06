import React, { useState } from "react";
import AuthContainer from "./AuthContainer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function MainMenu() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, signOut } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    try {
      setError("");
      setLoading(true);
      await signOut();
      history.push("/sign-in");
    } catch {
      setError("Failed to sign out of account");
      setLoading(false);
    }
  }

  return (
    <AuthContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Main Menu</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-account" className="btn btn-primary w-100 mt-3">
            Update Account
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button disabled={loading} variant="link" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </AuthContainer>
  );
}
