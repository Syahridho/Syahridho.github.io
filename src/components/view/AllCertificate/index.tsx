import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import BlurIn from "@/components/ui/blur-in";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

const url: string =
  "https://firebasestorage.googleapis.com/v0/b/next-app-study.appspot.com/o/assets%2Fcertificates%2Ffrondend%2Fdicoding-belajar-membuat-front-end-web-untuk-pemula.webp?alt=media&token=4d1827af-69d3-4352-b8d7-e28a425b72bf";

const datas = [
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
  {
    url: url,
  },
];

export default function AllCertificate() {
  const [select, setSelect] = useState("Frond End Developer");

  console.log(select);
  return (
    <div className="max-w-[1000px] mx-auto xl:my-6 p-8">
      <Link className="flex items-center text-slate-600" href={"/certificate"}>
        <div className="border rounded-full p-2 my-2 mr-2">
          <FaArrowLeft />
        </div>
        Back
      </Link>

      <BlurIn
        word="Certificate"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-4">I have certificates from several bootcamps.</h1>
      <div className="my-4">
        <Select onValueChange={(e) => setSelect(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={"FrondEnd Developer"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="frondend" defaultChecked>
              FrondEnd Developer
            </SelectItem>
            <SelectItem value="backend">BackEnd Developer</SelectItem>
            <SelectItem value="devops">DevOps Developer</SelectItem>
            <SelectItem value="mechine">Mechine</SelectItem>
            <SelectItem value="other">other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-4 gap-y-6">
        {datas.map((data, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="p-0 m-0 h-64 w-96 sm:h-48 sm:w-64 xl:h-40 xl:w-56"
              >
                <Card>
                  <Image
                    src={data.url}
                    width={350}
                    height={200}
                    alt="certificate"
                    className="object-cover w-full h-full"
                  />
                </Card>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <Image
                  width={700}
                  height={700}
                  src={data.url}
                  alt="certificate"
                  className="w-full object-contain"
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
