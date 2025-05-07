import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render the edit button if isAdmin", () => {
    render(<UserAccount user={{ id: 1, name: "Olu", isAdmin: true }} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Edit");
  });

  it("should not render the edit button if not Admin", () => {
    render(<UserAccount user={{ id: 2, name: "Olu2", isAdmin: false }} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("should render user account name name", () => {
    const user: User = {
      id: 1,
      name: "Olu",
      isAdmin: true,
    };

    render(<UserAccount user={user} />);

    const text = screen.getByText(user.name);
    expect(text).toBeInTheDocument();
  });
});
