import AlienVideo from "../AlienVideo/AlienVideo";
import FeaturedRelease from "../FeaturedRelease/FeaturedRelease";
import Ticker from "../Ticker/Ticker";
import styles from "./Hero.module.css"


export default function Hero() {
  return (
    <section class={styles.hero}>
      <div class={styles.hero_text}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1235 385">
          <path fill="currentColor" d="M8.873 236.333c-1.568-4.118-2.843-9.314-3.823-15.589-.98-6.274-1.569-12.745-1.765-19.412 0-6.863.196-13.431.588-19.706.589-6.274 1.569-11.47 2.942-15.588 3.137-1.177 6.176-3.137 9.117-5.883 2.941-2.941 5.393-7.549 7.353-13.823 1.961-6.471 2.942-15.491 2.942-27.059 0-12.55-1.177-21.961-3.53-28.236-2.157-6.47-4.804-10.784-7.941-12.941-2.941-2.353-5.589-3.53-7.941-3.53-1.765-3.53-3.04-8.333-3.824-14.412-.784-6.078-1.177-12.549-1.177-19.412.197-7.059.785-13.823 1.765-20.294.98-6.667 2.451-12.353 4.412-17.059 3.137.196 8.235.49 15.294.882 7.255.196 15.589.49 25 .883 9.609.196 19.609.392 30 .588 10.393.196 20.59.392 30.589.588h27.354c20.588 0 43.432-.294 68.53-.882a4679.668 4679.668 0 0 0 75.295-2.353c.98 3.725 1.863 9.118 2.647 16.176.784 7.06 1.373 14.903 1.765 23.53.392 8.628.588 17.353.588 26.177 0 8.824-.294 16.96-.882 24.412-.589 7.255-1.471 12.941-2.648 17.059-9.215 1.176-19.412 1.961-30.588 2.353a495.024 495.024 0 0 1-34.118 0c-11.373-.392-22.157-1.177-32.353-2.353-2.353-9.216-2.353-18.334 0-27.353h-34.118v12.353h27.353v40.883h-27.648v12.647h34.413c-2.353-9.216-2.353-18.432 0-27.648 16.47-.98 33.333-1.47 50.588-1.47 17.255 0 33.334.49 48.236 1.47.588 3.53 1.079 9.216 1.471 17.059.392 7.648.588 16.373.588 26.177 0 9.608-.196 19.314-.588 29.118-.196 9.804-.588 18.53-1.177 26.177-.588 7.647-1.372 13.137-2.353 16.471-20.588-.392-42.941-1.275-67.059-2.647-24.118-1.177-47.746-1.765-70.883-1.765-12.55 0-25.785.098-39.707.294-13.725.392-27.059.784-40 1.176-12.745.589-24.02 1.079-33.824 1.471-9.608.588-16.569 1.079-20.883 1.471Zm379.26.588c-10.784 0-19.216-2.451-25.294-7.353-6.079-5.098-11.177-11.569-15.295-19.412-4.706-9.02-8.627-19.216-11.764-30.589a479.472 479.472 0 0 1-8.236-35 1840.15 1840.15 0 0 0-6.47-34.118c-2.55-13.922-6.275-23.334-11.177-28.236-4.706-4.902-9.608-7.45-14.706-7.647-1.765-3.53-3.039-8.333-3.824-14.412-.784-6.078-1.176-12.549-1.176-19.412.196-7.059.784-13.823 1.765-20.294.98-6.667 2.451-12.353 4.411-17.059 8.04.784 19.412 1.667 34.118 2.647 14.903.98 31.471 1.47 49.707 1.47 13.333 0 26.471-.49 39.412-1.47 13.137-.98 23.726-1.863 31.765-2.647-3.529 13.922-5.098 28.922-4.706 45 .588 16.08 2.647 32.256 6.177 48.53 3.725 16.275 8.431 31.667 14.117 46.177l-.294-63.236h-8.529c-2.353-16.078-3.235-30.49-2.647-43.235.784-12.942 2.451-24.02 5-33.236a811.77 811.77 0 0 1 17.353 2.059c6.078.588 13.628 1.078 22.647 1.47 9.216.393 20.883.589 35.001.589 6.274 0 13.529-.196 21.765-.589 8.235-.588 16.372-1.176 24.412-1.764 8.039-.785 14.706-1.373 20-1.765 1.961 4.706 3.431 10.392 4.412 17.059.98 6.47 1.47 13.235 1.47 20.294.196 6.863-.098 13.334-.882 19.412-.784 6.079-2.059 10.883-3.824 14.412-4.902.196-9.215 2.451-12.941 6.765-3.725 4.118-6.863 11.863-9.412 23.236-4.118 18.039-7.843 35.098-11.176 51.177-3.138 15.882-6.863 29.902-11.177 42.059-4.314 12.157-9.902 21.667-16.765 28.53-6.863 6.862-15.882 10.294-27.059 10.294-5.882 0-11.079-.196-15.588-.588-4.51-.393-9.02-.883-13.53-1.471-4.314-.588-9.412-1.078-15.294-1.471-5.687-.392-12.746-.588-21.177-.588-10.784 0-19.608.392-26.471 1.177-6.863.784-12.843 1.47-17.941 2.058-5.098.785-10.491 1.177-16.177 1.177Zm216.99-.588c-1.569-4.118-2.843-9.314-3.824-15.589-.98-6.274-1.568-12.745-1.764-19.412 0-6.863.196-13.431.588-19.706.588-6.274 1.569-11.47 2.941-15.588 6.275-1.373 11.079-4.216 14.412-8.53 3.53-4.51 6.079-9.902 7.647-16.176a212.372 212.372 0 0 0 3.824-20.001c1.176-7.255 1.961-14.215 2.353-20.882.392-6.863-.392-12.647-2.353-17.353-1.765-4.706-5.686-7.55-11.765-8.53-1.765-3.53-3.039-8.333-3.824-14.412-.784-6.078-1.176-12.549-1.176-19.412.196-7.059.784-13.823 1.765-20.294.98-6.667 2.451-12.353 4.412-17.059 8.039.784 17.941 1.569 29.706 2.353 11.765.588 27.451.882 47.059.882 13.334 0 27.746-.49 43.236-1.47a3138.76 3138.76 0 0 1 48.236-3.236c16.471-.98 32.549-1.47 48.236-1.47 13.333 0 23.823 2.843 31.47 8.53 7.844 5.49 13.726 12.745 17.648 21.764 3.921 9.02 6.47 18.726 7.647 29.118 1.176 10.392 1.667 20.589 1.471 30.589v25.588c0 11.569 1.078 20.785 3.235 27.648 2.157 6.666 5 11.666 8.529 15 3.726 3.333 7.647 5.784 11.765 7.353 1.373 4.118 2.255 9.314 2.647 15.588.589 6.275.785 12.843.589 19.706 0 6.667-.491 13.138-1.471 19.412-.98 6.275-2.255 11.471-3.824 15.589a5165.48 5165.48 0 0 1-29.118-2.942c-11.176-1.176-24.706-1.764-40.588-1.764-16.275 0-31.667.588-46.177 1.764-14.314 1.177-25.491 2.157-33.53 2.942-.784-4.118-1.471-9.314-2.059-15.589a303.764 303.764 0 0 1-1.176-19.412c-.197-6.863-.197-13.431 0-19.706.196-6.274.588-11.47 1.176-15.588h8.235v-14.706h-25.588v14.706h8.235c.785 4.118 1.275 9.314 1.471 15.588.392 6.275.49 12.843.294 19.706a303.764 303.764 0 0 1-1.176 19.412c-.589 6.275-1.471 11.471-2.648 15.589a987.624 987.624 0 0 1-17.059-2.059c-5.882-.588-12.843-1.177-20.882-1.765-7.843-.588-17.549-.882-29.118-.882-18.236 0-33.922.49-47.059 1.47-13.138 1.177-24.02 2.255-32.648 3.236Zm142.649-128.237h21.176V94.272h-21.176v13.824Zm184.25 128.237c-1.568-4.118-2.843-9.314-3.823-15.589-.981-6.274-1.569-12.745-1.765-19.412 0-6.863.196-13.431.588-19.706.589-6.274 1.569-11.47 2.942-15.588 3.137-1.177 6.176-3.137 9.117-5.883 2.942-2.941 5.393-7.549 7.353-13.823 1.961-6.471 2.942-15.491 2.942-27.059 0-12.55-1.177-21.961-3.53-28.236-2.157-6.47-4.804-10.784-7.941-12.941-2.941-2.353-5.588-3.53-7.941-3.53-1.765-3.53-3.04-8.333-3.824-14.412-.784-6.078-1.176-12.549-1.176-19.412.196-7.059.784-13.823 1.764-20.294.981-6.667 2.451-12.353 4.412-17.059 5.49.392 11.863.98 19.118 1.765 7.451.588 15 1.176 22.647 1.764 7.843.393 15.098.589 21.765.589 14.31 0 29.31-.294 45-.883 15.88-.784 34.31-1.862 55.3-3.235-3.14 12.941-4.42 23.53-3.83 31.765.79 8.235 4.41 15.392 10.88 21.47 6.48 6.08 16.48 12.354 30 18.825l3.83-7.648c-12.35-5.882-21.37-11.372-27.06-16.47-5.49-5.295-8.43-11.57-8.82-18.824-.4-7.451.88-17.157 3.82-29.118 8.43.196 17.94.98 28.53 2.353 10.78 1.372 23.04 2.059 36.76 2.059 12.16 0 23.14-.49 32.95-1.47 10-1.177 19.02-2.158 27.05-2.942 1.77 4.706 3.14 10.392 4.12 17.059.98 6.47 1.47 13.235 1.47 20.294 0 7.06-.39 13.628-1.17 19.706-.79 6.079-1.96 10.883-3.53 14.412-2.36 0-5.1 1.177-8.24 3.53-2.94 2.157-5.49 6.372-7.65 12.647-2.15 6.275-3.23 15.686-3.23 28.236 0 11.568.98 20.588 2.94 27.059 1.96 6.274 4.41 10.882 7.35 13.823 2.94 2.746 5.98 4.706 9.12 5.883 1.37 4.118 2.26 9.314 2.65 15.588.59 6.275.78 12.843.59 19.706 0 6.667-.49 13.138-1.47 19.412-.98 6.275-2.26 11.471-3.83 15.589-7.84-.981-17.74-2.059-29.7-3.236-11.77-.98-24.02-1.47-36.77-1.47-16.47 0-32.45.588-47.94 1.764-15.49 1.177-32.26 2.157-50.3 2.942 2.75-12.942 3.83-23.824 3.24-32.648-.59-8.823-3.24-16.568-7.94-23.235-4.71-6.863-11.77-13.334-21.18-19.412l-4.7 7.059c8.43 5.686 14.6 11.666 18.53 17.941 3.92 6.079 5.98 13.236 6.17 21.471.39 8.039-.68 17.647-3.23 28.824-6.47-.785-14.42-1.765-23.83-2.942-9.21-1.176-20.19-1.764-32.939-1.764-11.961 0-23.921.588-35.882 1.764a12808.658 12808.658 0 0 1-29.707 2.942ZM3.763 381.636c-.848-2.226-1.537-5.036-2.067-8.428a83.944 83.944 0 0 1-.955-10.496c0-3.711.106-7.263.319-10.655.318-3.393.848-6.202 1.59-8.429 1.696-.636 3.498-1.696 5.407-3.18 1.908-1.485 3.71-3.923 5.407-7.316 1.802-3.392 3.18-8.163 4.135-14.312.848-5.089 1.06-9.224.636-12.404-.424-3.287-1.22-5.778-2.386-7.475-1.06-1.802-2.226-3.021-3.498-3.657-1.167-.743-2.174-1.114-3.022-1.114-.954-1.908-1.643-4.505-2.067-7.792-.424-3.287-.636-6.785-.636-10.496a89.91 89.91 0 0 1 .954-10.973c.53-3.605 1.325-6.679 2.385-9.224 4.029.425 8.906.902 14.63 1.432 5.832.53 12.405.795 19.72.795 5.937 0 12.193-.106 18.766-.318 6.679-.212 13.146-.477 19.401-.795 6.255-.318 11.715-.689 16.38-1.114-.636 4.029-.795 9.065-.477 15.108.424 6.043 2.067 11.874 4.93 17.493.106-5.831.265-11.662.477-17.493.318-5.937.848-10.973 1.59-15.108 4.453.212 8.641.531 12.564.955 3.922.318 8.004.636 12.245.954 4.347.212 9.277.318 14.79.318 3.604 0 7.739-.106 12.404-.318 4.665-.318 9.17-.636 13.517-.954 4.347-.424 7.846-.743 10.496-.955 1.06 2.545 1.855 5.619 2.386 9.224.53 3.499.795 7.156.795 10.973.106 3.711-.053 7.209-.477 10.496-.425 3.287-1.114 5.884-2.068 7.792-.742 0-1.749.371-3.021 1.114-1.167.636-2.28 1.855-3.34 3.657-.954 1.697-1.537 4.135-1.749 7.316-.212 3.074.212 7.156 1.272 12.245 1.378 6.149 2.862 10.973 4.453 14.471 1.696 3.393 3.392 5.884 5.089 7.475 1.802 1.484 3.551 2.544 5.248 3.18.742 2.227 1.219 5.036 1.431 8.429.318 3.392.424 6.944.318 10.655a67.93 67.93 0 0 1-.795 10.496c-.53 3.392-1.219 6.202-2.068 8.428a4017.39 4017.39 0 0 1-15.902-1.59c-6.15-.636-13.942-.954-23.378-.954-9.011 0-17.599.318-25.762.954-8.058.636-14.26 1.166-18.607 1.59-.424-2.226-.795-5.036-1.113-8.428-.318-3.393-.53-6.892-.636-10.496a178.455 178.455 0 0 1 0-10.655c.106-3.393.318-6.202.636-8.429h5.566l-1.59-17.811-9.383 27.035-30.851-13.517-1.909 4.293 17.334 7.793a71.768 71.768 0 0 1 6.998 3.498A17.698 17.698 0 0 1 96 359.69c1.59 2.015 2.65 4.771 3.18 8.27.636 3.392.53 7.951-.318 13.676a534.617 534.617 0 0 0-8.428-.795 973.275 973.275 0 0 1-12.087-.795 4069.84 4069.84 0 0 0-13.517-.636 278.079 278.079 0 0 0-12.881-.318c-11.768 0-21.734.318-29.898.954-8.057.636-14.153 1.166-18.288 1.59Zm263.117 2.863c-25.445 0-44.687-5.407-57.728-16.221-12.934-10.814-19.401-26.823-19.401-48.027 0-23.324 6.573-40.446 19.719-51.366 13.147-10.92 32.548-16.38 58.205-16.38 27.353 0 47.39 5.407 60.113 16.221 12.722 10.708 19.083 26.505 19.083 47.39 0 23.643-6.732 40.977-20.196 52.003-13.465 10.92-33.396 16.38-59.795 16.38Zm-3.499-55.819h9.701v-20.515h-9.701v20.515Z"/>
          <path fill="currentColor" d="M349.793 381.636c-.848-2.226-1.537-5.036-2.067-8.428a83.96 83.96 0 0 1-.954-10.496c0-3.711.106-7.263.318-10.655.318-3.393.848-6.202 1.59-8.429 1.696-.636 3.34-1.696 4.93-3.18 1.59-1.591 2.916-4.082 3.976-7.475 1.06-3.498 1.59-8.375 1.59-14.63 0-6.785-.636-11.874-1.908-15.267-1.167-3.499-2.598-5.831-4.294-6.997-1.59-1.272-3.022-1.909-4.294-1.909-.954-1.908-1.643-4.505-2.067-7.792-.424-3.287-.636-6.785-.636-10.496.106-3.817.424-7.474.954-10.973.53-3.605 1.325-6.679 2.385-9.224 2.969.212 6.414.531 10.337.955 4.029.318 8.111.636 12.245.954 4.241.212 8.164.318 11.768.318 7.74 0 15.85-.159 24.332-.477 8.587-.424 18.553-1.007 29.897-1.75-1.696 6.998-2.385 12.723-2.067 17.176.424 4.452 2.385 8.322 5.884 11.609 3.499 3.286 8.906 6.679 16.221 10.177l2.067-4.134c-6.679-3.181-11.556-6.149-14.63-8.906-2.969-2.862-4.559-6.255-4.771-10.178-.212-4.028.477-9.276 2.067-15.744 4.559.106 9.701.531 15.426 1.273 5.831.742 12.457 1.113 19.878 1.113 6.574 0 12.511-.265 17.812-.795a757.162 757.162 0 0 1 14.63-1.591c.955 2.545 1.697 5.619 2.227 9.224.53 3.499.795 7.156.795 10.973 0 3.817-.212 7.368-.636 10.655-.424 3.287-1.06 5.884-1.909 7.792-1.272 0-2.756.637-4.452 1.909-1.591 1.166-2.969 3.445-4.135 6.838-1.166 3.393-1.749 8.482-1.749 15.267 0 6.255.53 11.132 1.59 14.63 1.06 3.393 2.385 5.884 3.976 7.475 1.59 1.484 3.233 2.544 4.929 3.18.743 2.227 1.22 5.036 1.432 8.429.318 3.392.424 6.944.318 10.655a67.93 67.93 0 0 1-.795 10.496c-.53 3.392-1.22 6.202-2.068 8.428-4.241-.53-9.595-1.113-16.062-1.749-6.361-.53-12.987-.795-19.878-.795-8.906 0-17.546.318-25.922.954-8.375.636-17.44 1.166-27.194 1.59 1.484-6.997 2.068-12.881 1.749-17.652-.318-4.771-1.749-8.959-4.293-12.563-2.545-3.711-6.361-7.21-11.45-10.496l-2.545 3.817c4.559 3.074 7.899 6.308 10.019 9.7 2.12 3.287 3.234 7.157 3.34 11.609.212 4.347-.372 9.542-1.75 15.585-3.498-.424-7.792-.954-12.881-1.59-4.983-.636-10.92-.954-17.811-.954-6.467 0-12.935.318-19.402.954-6.361.636-11.715 1.166-16.062 1.59Zm202.656 0c-.848-2.226-1.537-5.036-2.067-8.428a83.96 83.96 0 0 1-.954-10.496c0-3.711.106-7.263.318-10.655.318-3.393.848-6.202 1.59-8.429 3.393-.848 5.99-3.18 7.793-6.997 1.802-3.923 2.703-10.549 2.703-19.879v-11.45h-5.089c.954 8.058.795 16.009-.477 23.855-4.135.848-8.057 1.431-11.768 1.749-3.711.212-7.633.212-11.768 0-4.135-.318-8.959-.901-14.472-1.749-.636-3.711-1.113-8.27-1.431-13.677a301.395 301.395 0 0 1-.477-17.334c0-6.149.106-12.086.318-17.811.212-5.725.53-10.761.954-15.108.424-4.453.901-7.686 1.431-9.701 6.255 0 15.691.425 28.307 1.273 12.617.742 28.679 1.113 48.186 1.113 13.253 0 24.597-.212 34.032-.636a5808.66 5808.66 0 0 0 23.855-1.113c6.573-.425 11.98-.637 16.22-.637.531 2.333 1.008 5.831 1.432 10.496.424 4.559.742 9.754.954 15.585.212 5.725.318 11.609.318 17.652 0 5.937-.159 11.556-.477 16.857-.318 5.195-.795 9.542-1.431 13.041-5.513.848-10.284 1.431-14.313 1.749-4.029.212-7.951.212-11.768 0-3.711-.318-7.952-.901-12.722-1.749-1.273-7.74-1.432-15.638-.477-23.696h-5.089v11.291c0 6.256.53 11.239 1.59 14.949 1.166 3.711 2.65 6.467 4.453 8.27 1.802 1.802 3.816 3.021 6.043 3.657.742 2.227 1.219 5.036 1.431 8.429.318 3.392.424 6.944.318 10.655a67.93 67.93 0 0 1-.795 10.496c-.53 3.392-1.219 6.202-2.067 8.428-4.665-.53-10.549-1.113-17.653-1.749-6.997-.53-15.213-.795-24.649-.795-9.86 0-18.235.265-25.127.795-6.785.636-12.51 1.219-17.175 1.749Zm126.432 0c-.954-2.226-1.696-5.036-2.227-8.428a83.96 83.96 0 0 1-.954-10.496c-.106-3.711 0-7.263.318-10.655.424-3.393 1.008-6.202 1.75-8.429 1.59-.636 3.18-1.696 4.771-3.18 1.696-1.591 3.074-4.082 4.134-7.475 1.06-3.498 1.591-8.375 1.591-14.63 0-6.785-.637-11.874-1.909-15.267-1.272-3.499-2.756-5.831-4.453-6.997-1.59-1.272-2.968-1.909-4.134-1.909-.955-1.908-1.697-4.505-2.227-7.792-.53-3.287-.795-6.785-.795-10.496.106-3.817.424-7.474.954-10.973.636-3.605 1.538-6.679 2.704-9.224 3.18.212 7.262.531 12.245.955 4.983.424 10.231.795 15.744 1.113 5.619.212 10.814.318 15.585.318 5.301 0 10.761-.106 16.38-.318a563.76 563.76 0 0 0 15.903-1.113c4.982-.424 9.064-.743 12.245-.955 1.06 2.545 1.855 5.619 2.385 9.224.53 3.499.795 7.156.795 10.973 0 3.817-.212 7.368-.636 10.655-.424 3.287-1.113 5.884-2.067 7.792-1.59 0-3.181.637-4.771 1.909-1.59 1.166-2.916 3.445-3.976 6.838-1.06 3.393-1.59 8.482-1.59 15.267 0 6.255.53 11.132 1.59 14.63 1.166 3.393 2.545 5.884 4.135 7.475 1.59 1.484 3.181 2.544 4.771 3.18.848 2.227 1.431 5.036 1.749 8.429.318 3.392.424 6.944.318 10.655a83.96 83.96 0 0 1-.954 10.496c-.53 3.392-1.272 6.202-2.226 8.428a865.322 865.322 0 0 0-12.246-1.113c-4.982-.318-10.283-.636-15.902-.954a290.039 290.039 0 0 0-16.38-.477c-4.877 0-10.019.159-15.426.477-5.301.318-10.39.636-15.267.954a1119.9 1119.9 0 0 0-11.927 1.113Zm97.056 0c-.954-2.544-1.643-5.566-2.067-9.064-.425-3.499-.69-7.104-.796-10.814-.106-3.711 0-7.157.318-10.337.424-3.287.955-5.884 1.591-7.793 1.272-.424 2.703-1.272 4.293-2.544 1.697-1.378 3.128-3.764 4.294-7.156 1.273-3.393 1.909-8.376 1.909-14.949 0-6.361-.53-11.291-1.591-14.79-.954-3.498-2.226-5.99-3.816-7.474-1.591-1.484-3.287-2.333-5.089-2.545-.954-2.226-1.644-5.036-2.068-8.428a89.84 89.84 0 0 1-.636-10.814c.106-3.711.424-7.262.954-10.655.53-3.499 1.326-6.361 2.386-8.588 2.544.212 5.831.478 9.86.796 4.028.212 8.322.477 12.881.795 4.665.212 9.171.424 13.517.636 4.347.106 8.164.159 11.45.159 4.771 0 9.701-.106 14.79-.318 5.195-.318 9.966-.689 14.313-1.113 4.453-.424 8.004-.743 10.655-.955.954 2.227 1.59 5.195 1.908 8.906.424 3.711.583 7.633.477 11.768a133.132 133.132 0 0 1-.795 11.609c-.424 3.711-1.06 6.679-1.908 8.906-2.545 0-4.453 1.007-5.725 3.021-1.167 1.909-1.962 4.453-2.386 7.634-.318 3.18-.477 6.573-.477 10.178v16.539h4.612a164.688 164.688 0 0 1 0-14.472c.318-4.665.689-8.004 1.113-10.019 4.877-.848 10.39-1.378 16.539-1.59 6.255-.318 12.51-.318 18.765 0 6.362.212 12.034.742 17.016 1.59.637 2.757 1.114 6.679 1.432 11.768.424 4.983.636 10.549.636 16.698.106 6.043.106 12.034 0 17.971-.106 5.831-.371 11.026-.795 15.584-.318 4.559-.742 7.846-1.273 9.86-10.601-.212-21.68-.689-33.236-1.431a633.854 633.854 0 0 0-35.146-.954c-5.937 0-12.351.053-19.242.159-6.786.212-13.465.424-20.038.636-6.573.318-12.404.583-17.493.795-5.089.318-8.8.583-11.132.795Zm144.586 0c-.955-2.544-1.644-5.566-2.068-9.064a117.871 117.871 0 0 1-.795-10.814c-.106-3.711 0-7.157.318-10.337.424-3.287.954-5.884 1.59-7.793 1.273-.424 2.704-1.272 4.294-2.544 1.696-1.378 3.128-3.764 4.294-7.156 1.272-3.393 1.908-8.376 1.908-14.949 0-6.361-.53-11.291-1.59-14.79-.954-3.498-2.226-5.99-3.817-7.474-1.59-1.484-3.286-2.333-5.089-2.545-.954-2.226-1.643-5.036-2.067-8.428a89.84 89.84 0 0 1-.636-10.814c.106-3.711.424-7.262.954-10.655.53-3.499 1.325-6.361 2.386-8.588 2.544.212 5.831.478 9.859.796 4.029.212 8.323.477 12.882.795 4.665.212 9.17.424 13.517.636 4.347.106 8.164.159 11.45.159 4.771 0 9.701-.106 14.79-.318 5.195-.318 9.966-.689 14.312-1.113 4.455-.424 8.005-.743 10.655-.955.95 2.227 1.59 5.195 1.91 8.906.42 3.711.58 7.633.48 11.768-.11 4.029-.38 7.899-.8 11.609-.42 3.711-1.06 6.679-1.91 8.906-2.54 0-4.45 1.007-5.72 3.021-1.17 1.909-1.964 4.453-2.388 7.634-.318 3.18-.477 6.573-.477 10.178v16.539h4.615c-.22-4.983-.22-9.807 0-14.472.31-4.665.69-8.004 1.11-10.019 4.88-.848 10.39-1.378 16.54-1.59 6.25-.318 12.51-.318 18.76 0 6.37.212 12.04.742 17.02 1.59.64 2.757 1.11 6.679 1.43 11.768.43 4.983.64 10.549.64 16.698.1 6.043.1 12.034 0 17.971-.11 5.831-.37 11.026-.8 15.584-.32 4.559-.74 7.846-1.27 9.86-10.6-.212-21.68-.689-33.24-1.431a633.628 633.628 0 0 0-35.142-.954c-5.937 0-12.351.053-19.243.159-6.785.212-13.464.424-20.037.636-6.573.318-12.405.583-17.493.795-5.089.318-8.8.583-11.132.795Zm143.947 0c-.85-2.226-1.54-5.036-2.07-8.428a84.73 84.73 0 0 1-.95-10.496c0-3.711.11-7.263.32-10.655.32-3.393.85-6.202 1.59-8.429 3.39-.742 5.99-2.279 7.79-4.611 1.91-2.439 3.29-5.354 4.14-8.747.84-3.499 1.53-7.103 2.06-10.814.64-3.923 1.06-7.686 1.28-11.291.21-3.711-.22-6.838-1.28-9.383-.95-2.544-3.07-4.081-6.36-4.612-.95-1.908-1.64-4.505-2.07-7.792-.42-3.287-.63-6.785-.63-10.496.1-3.817.42-7.474.95-10.973.53-3.605 1.33-6.679 2.39-9.224 4.35.425 9.7.849 16.06 1.273 6.36.318 14.84.477 25.44.477 7.21 0 15.01-.265 23.38-.795 8.48-.636 17.18-1.22 26.08-1.75 8.91-.53 17.6-.795 26.08-.795 7.21 0 12.88 1.537 17.02 4.612 4.24 2.969 7.42 6.891 9.54 11.768 2.12 4.877 3.5 10.125 4.14 15.744.63 5.619.9 11.132.79 16.539v13.835c0 6.256.58 11.238 1.75 14.949 1.17 3.605 2.7 6.308 4.61 8.111 2.02 1.802 4.14 3.127 6.36 3.975.75 2.227 1.22 5.036 1.43 8.429.32 3.392.43 6.944.32 10.655 0 3.604-.26 7.103-.79 10.496-.53 3.392-1.22 6.202-2.07 8.428-4.35-.424-9.59-.954-15.74-1.59-6.05-.636-13.36-.954-21.95-.954-8.8 0-17.12.318-24.97.954-7.74.636-13.78 1.166-18.13 1.59-.42-2.226-.79-5.036-1.11-8.428a165.7 165.7 0 0 1-.64-10.496c-.1-3.711-.1-7.263 0-10.655.11-3.393.32-6.202.64-8.429h4.45v-7.951h-13.83v7.951h4.45c.42 2.227.69 5.036.8 8.429.21 3.392.26 6.944.15 10.655-.1 3.604-.31 7.103-.63 10.496-.32 3.392-.8 6.202-1.43 8.428-2.87-.318-5.94-.689-9.23-1.113-3.18-.318-6.94-.636-11.29-.954-4.24-.318-9.49-.477-15.74-.477-9.86 0-18.34.265-25.45.795-7.1.636-12.98 1.219-17.65 1.749Zm77.13-69.336h11.45v-7.475h-11.45v7.475Z"/>
        </svg>
        <Ticker text={["Singer/Songwriter/Humanoid", "Queens, NY"]} />
      </div>

      <AlienVideo />

      <FeaturedRelease
        title="Laura's Vacationland Pt. 2"
        image="https://i1.sndcdn.com/artworks-xct8pT1xWSSE28PT-orz1cA-t240x240.jpg"
        cta="Play Album"
        url="www.google.com"
        badgeText="Out Now"
      />
    </section>
  )
}