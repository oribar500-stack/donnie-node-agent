import si from "systeminformation";

async function main() {
  const cpu = await si.cpu();
  const mem = await si.mem();
  const os = await si.osInfo();

  console.log("Donnie Node Agent starting...");
  console.log(`OS: ${os.distro} ${os.release}`);
  console.log(`CPU: ${cpu.manufacturer} ${cpu.brand}`);
  console.log(`Cores: ${cpu.cores}`);
  console.log(`RAM: ${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`);

  console.log("Agent ready.");
}

main().catch((err) => {
  console.error("Agent failed:", err);
  process.exit(1);
});
