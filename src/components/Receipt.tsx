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
        <h1 className="text-3xl flex justify-center font-[sanskrit]">
          Parijat Mitra Mandal
        </h1>
        <h3 className="pt-4">
          Thank you for your generous donation to the Ganapati Festival! Your
          donation will help us to celebrate this important festival in a
          special way. We are grateful for your support.
        </h3>
        <div
          className="pt-4 text-xl text-[#F0E68C] font-bold"
        >
          <p>Donor Name: {name}</p>
          <p className="pt-2">Donated Amount: {amount} ₹</p>
        </div>
        <div className="ml-[400px]">
          <p>Regards</p>
          <p>Parijat Mitra Mandal</p>
        </div>
      </div>
      <div className="grid justify-center text-[#ddd] mt-[2.75rem]">
        <p> Reg No: MH 1761 / 2007 / F30370 Pune.</p>
        <p className="text-xs text-[#ddd]">
          Receipt eligible for claim under Section 80G{' '}
        </p>
      </div>
    </>
  );
}
