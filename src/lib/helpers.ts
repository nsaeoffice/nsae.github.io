export function functionRestartAfterSwap(functionName: any) {
  functionName();
  document.addEventListener("astro:after-swap", functionName);
}
