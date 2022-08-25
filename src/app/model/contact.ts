
export interface Contact {
  label: string,
  data: DataObject[],
}

export interface DataObject {
  id: string,
  label: string,
  link: string,
  name: string,
  icon: string,
}

export const CONTACT: Contact = {
  label: "Contacts",
  data: [
    {
      id: '1',
      label: "Email",
      link: "mailto:andymwamengo@gmail.com",
      name: "andymwamengo@gmail.com",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABmJLR0QA/wD/AP+gvaeTAAABU0lEQVRIie3WvUpcQRjG8d8aPyD4VUTtApssxDtQgoWkWa8itxHsvAixkBRWKWxTiSJp9AKEQNIKKpguiqZIXIszI7PLOdmz61EQ94G3mPN+/Oc9M8wMAz111TrGE3iPyYrqX+AQv/OcdRyjVbEd43WEDCXAacxW1FmqKbwscjawWzDTfuyrpLsi1fAR5/cAnYYa/9UyFpLxK2zhpgfQP6xr33RNrOQBt0PChmw904n8KAE7wmKSN4cvwbddBIzJZ9p/yQg+4ToHdIU1jIbYuCS/kpiuwGj7eJfEvMVO4v+G+cTfwF5OndLA2MFq6DJ20AwWD46x0OWfgho9AaP9xIecvCV875LbF7Al27GbmAn2Wbld3Dcw2t9gZePvgMN55BJ60Wde21n6KHpewLMH5JzkfXwjO+WruJY6b456hHQ+MaZkT4zxKtrCJQ4UPDEGepq6BYy/3vRimHR0AAAAAElFTkSuQmCC",
    },
    {
      id: '2',
      label: "GitHub",
      link: "https://github.com/andymwamengo",
      name: "https://github.com/andymwamengo",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB0ElEQVRIie3WPWtUQRTG8V8SMEE7C41JDBK1tVZBIgo2QhJBrW0sFNQirZXfQiW+oJUQMJhgI/gJbKy0E7QLRFzBl5i4Fvdec507921XUuWByzJzz3P+58zO7Cw72iYNtIidxCzO4xAm0vlP+IBlLOHj/ypuHHexgW7Ns4lnaWF9aQ5fGwDDp4OZXqG3JB20hea7v9kWOtcnNA9v3PmE4vIexzEs1IAW0riTubkOxpqAY8mHg9WYxj4MpZ+n0/lMI4H/fh10Unz3HmlScU5HA/+GreMHBgPDbNpFqP0twaPBeCjNXaqXit0utoRmWgryrFQFv4+AT/QIPhXkeVcV3ImAh6sMFdoT5OnkX4bfcTjWB3gkGP+zd0LQaiTBdI/g0BfL/Vcrikv9RrH6Ou3G2yDPiyrDfATcxSsNf30k5/V1JMd8lekg1kvg3/AAlzAV+KZwGY/wPeJdx4G6ip/kDFfwPFLAucBzBj9KCu7icR2U5OJfSw2r2IunaeLPuF3iu1MC/aJBt5ku2roWrzb0HI5AN3GhKTTTdfyW/Kc6q35nD0ag19pCM81IljefsEpZzJoeOg01hnv41QD8Ew8Vb6e+NIob2FXyfkDzs76j7dMfXTjhKzmestYAAAAASUVORK5CYII=",
    },
    {
      id: '3',
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/andymwamengo/",
      name: "https://www.linkedin.com/in/andymwamengo/",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVRIie2Wv0oDQRCHv1gEIjYWEdQzKKQTH8R/Mfa+gXiSznewslPUxlKwUGLnA/gI2gRBxdacnckZi93jNuve3d5eFIv8YAiZ28w3M3c3GRjrj1TKcbYGbAHrwCLgSf8L8AS0gWvgeVTJzQMnQB8YZFgIXMrECqkJfFgAdQuAhit0H1FBXqhavZ8X2iwIVeHWlXv8bO8d0ALuHeABMGcDPjf8eFpeW3as/DQLWsP89O4AZeDAEdwnfv2M8h0D29iuCprQwKsJCZUU030zwCGiW5PANvBuiLGWVvFjQraqdJ9p+rUMMR7SwIEDGOAIuCLuYN0QIxg1eAr4kr669JWzwPo9fkvLKkEV4nZX5Oen4dxrGrjjALbVUGwdfPuL4HbaxQXMA0SV7qsqvhXDuQHQI2OAAJwZwEXtOAsK4o8/6el2sS4wawMGMcFsNo4sC4FNW2gkn+KLwF5eaKQGbm3vAhuu0EhVxEjsWQBD4AKLe5pnvfWI19slhtfbDmIG3MjvY/0ffQNl4j4IlhKkNgAAAABJRU5ErkJggg==",
    },
    {
      id: '4',
      label: "Twitter",
      link: "https://twitter.com/andymwamengo",
      name: "https://twitter.com/andymwamengo",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABjElEQVRIie3Wv0vVURjH8ZdKEojYD9ocHTTE1RYTIxAy3ARRaBcM+hfEWaJoaysaxEGJWhpadBSHEBx0KYWWCkJIM38N537hcvvec7/n3tuSfuDZzvm8z/OcH8/hUv+7WprkcxUPMYAzfMJ7HFaMa8dRnsFtXEuEjmC3BCyPzxjGDUzjAzqrmbzCamxAhe7gIAeaxRGOcYopkQpvliaso7sAeCMCzeIUy1jA42pG22UTvmEyAu0rAC2PJbRVM1vJmbCKB/4u03gC9CVaI0lEzb7gGSZK2Y4lgCdiULiC1wmGRWO4ElSZ/oZwGL7XWmGivtYa8E7zs90XHo6oRv8B+G0taKb5JoNnioLhEfaaAP2hyiuYd7daMYQt/E5ZbY6eC3tcWE80nu0erqeutAUvGoCe4F4qtFz3hVOZ1/ZiMdcINFMv1hKgTzXwwegQ7vQi/hQEHoq0vZiGhO/KjtDAU0r7Ef31QDN1YVb4CNSC/cQb3K0HFNuLWxhED24KneuXcE02hYZyXA/0UhdD5+q+K5z2ztKIAAAAAElFTkSuQmCC",
    },
  ]
};
