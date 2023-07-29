import React, { useState } from "react";
function Delete() {
    const qwe = { asd: 123, sdf: 654 }
    const cxz = { sdf: 345, ...qwe,
       asd: 456, zxc: 567 }
    const { sdf, asd } = cxz

    return (
        <>
            {asd}
            {sdf}
        </>
    );
}
export default Delete;
