function Star(props) {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.322 2.923a.754.754 0 011.356 0l2.65 5.44 6.022.829a.749.749 0 01.419 1.283c-1.61 1.538-4.382 4.191-4.382 4.191l1.069 5.952a.751.751 0 01-1.097.793L12 18.56l-5.359 2.851a.751.751 0 01-1.097-.793l1.07-5.952-4.382-4.191a.75.75 0 01.419-1.283l6.021-.829 2.65-5.44z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default Star;
