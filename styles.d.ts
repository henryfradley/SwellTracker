// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
s

// For SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}