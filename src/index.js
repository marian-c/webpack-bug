export default function main() {
  import('./lazy').then(mod => console.log(mod));
}

main();
