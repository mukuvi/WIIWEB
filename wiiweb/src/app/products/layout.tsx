import React from "react";

export default function productDetailsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children} <p>featured products</p>
    </>
  );
}
