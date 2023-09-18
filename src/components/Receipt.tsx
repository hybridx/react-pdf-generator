export default function Receipt({
  name,
  amount,
}: {
  name: string | null;
  amount: string | null;
}) {
  return (
    <>
      <div className="ml-56 text-[#ddd]">
        <h1
          style={{
            fontFamily: 'sanskrit',
          }}
          className="text-3xl"
        >
          Shree Ganeshaya Namah
        </h1>
        <h3 className="pt-4">
          Thank you for your generous donation to the Ganapati Festival! Your
          donation will help us to celebrate this important festival in a
          special way. We are grateful for your support.
        </h3>
        <p className="pt-4">Donor Name: {name}</p>
        <p className="pt-2">Donated Amount: {amount}</p>
      </div>
      <div
        className="mt-[120px]"
        style={{
          height: '200px',
          width: '842px',
          marginLeft: '-1rem',
        }}
      >
        <img
          src="./parijat.jpeg"
          alt="Parijat"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  );
}
