

export const getLinkClass = ({ isActive, isPending }) =>
isActive ? "active" : isPending ? "pending" : ""