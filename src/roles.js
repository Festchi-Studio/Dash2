export const ROLES = {
  PRODUCT_OWNER: "Product Owner",
  TEAM_LEAD: "Team Lead",
  PROJECT_MANAGER: "Project Manager",
  ENGINEERING_MANAGER: "Engineering Manager"
};

// Example users
export const USERS = [
  { username: "alice", password: "pass1", role: ROLES.PRODUCT_OWNER },
  { username: "bob", password: "pass2", role: ROLES.TEAM_LEAD },
  { username: "carol", password: "pass3", role: ROLES.PROJECT_MANAGER },
  { username: "dave", password: "pass4", role: ROLES.ENGINEERING_MANAGER }
];