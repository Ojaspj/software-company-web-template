import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>
    <h1>Services</h1>
    <p>{params.slug}</p>
  </div>;
}
