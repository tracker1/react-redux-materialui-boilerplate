// NOTE: will be replaced by development-prod for built version

const sleep = ms => new Promise(res => setTimeout(res, ms));

export default async function registerApp(/* app */) {
  // TODO: add webpack dev and hmr
  await sleep(10);
}
