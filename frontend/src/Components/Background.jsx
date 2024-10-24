import React from 'react'

function Background() {
  return (
    <div
    className="absolute inset-0 bg-[linear-gradient(to_right,#c3c3c39c_1px,transparent_1px),linear-gradient(to_bottom,#c3c3c39c_1px,transparent_1px)] bg-[size:11px_11px] [mask-image:radial-gradient(ellipse_80%_60vh_at_50%_0%,#000_70%,transparent_110%)]"
    >
    <div
      className="absolute inset-x-0 top-0 -z-10 m-auto size-[310px] rounded-full bg-[#ff0606] opacity-20 blur-[100px]"
    ></div>
    </div>
  )
}

export default Background