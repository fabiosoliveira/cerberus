import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CerberusPayModule = buildModule("CerberusPayModule", (m) => {
  const cerberusPay = m.contract("CerberusPay");

  return { cerberusPay };
});

export default CerberusPayModule;
