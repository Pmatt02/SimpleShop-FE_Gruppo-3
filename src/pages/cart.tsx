import { Resoconto, CartCard } from "@/components/CartComponents"
import type { CartCardType } from "@/types/CartCardType"
import { stringify } from "querystring";


const prodotti:CartCardType[] = [ //ipotetica struttura dell'insieme dei prodotti
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAJ1BMVEXMzMzy8vL19fXU1NTm5ubj4+Pc3NzY2NjJycnPz8/u7u7q6urg4ODLWUWRAAAEnklEQVR4nO2a23ajMAxFwffb/3/vWBJgQyChBJvOjM5TSrOSXfVYkmUPA4vFYrFYLBaLxWKxWCwWi8VisVgsFut/l3PuaYQfKyNLY+xfBe6cNzqGUYzyr+HOzCmMGRkUfz22B2N4aaIAjaTgn8b6oBxkaXUoxCT7NNc7kZmzM8RkjnHGT0+jHSnnOZniEl6ByDFZjdzqabx9TWauqYO2kLKdgadBPk24Fq2/lZnzq6iNnKuM/H3mXsxckEXIyHXi8OAc8XvMnQugDsXIxJzkS65L8Cv1K1Kg97D+1lkuaLnbf1j8rX+YG82swljcnF+AM4aDUigDhPtRc0NnpGJYrb+MbP3MDEVyG/KILnmqvkMBVIFQS86A9Vc4PSRvtY6s07hkn8HOZsYsJ2gNAnpMkzEq2yp4iwgrcEyBwnfmzma22cy1l0XImdnvrD81v2dVXsa+KdCDM2RScayrSY6yeU1zKLO8qW5VXexa33M07ZSZi6LxxxstVap7lVem+l6eNLSL9xbNvOlAySOH2n/T9lGz3Y5NK2PcLBHaYKux9nID7ibUsq4mau473pnjpJYYtKB2dv70nJmdo6QWlNLfSikFFTPDt8AePEEnysyALaJ3t8hjpW+DPWCijVNuxmibmxYR/idbYUOLPMbpB8K+66NbYks04FSgv8GGLnv1f3K2nbcHj9ljQr2ObSKs6lUf0BYbqrTQ9IVXsb2inVqsuZtiDwk+PNDrq9g0IQHu6mFbbNr/kbkvYssymaq677bYaG5BWe8Sth9MKbXVhqwtNrWg0YEtL0Y7lWamG7ajhv96tIc62rpbtLG+kymvenvZYAjbDduhudPck1zJJLNLhKr2yK2xMX3Fb7C9pryt+uXtwWHPHQ6W5MlDO5urJMweKu7G2DAlEES7g23GeGo49jqhao5NI7BhD1vCBOdac9Ucm5pXv4et8avTlRa8Obac6/sG209lO6+1CwOP5th0CmB2oq3mHmksCfns9Lo5NnZwYO4tti1Vuz64k+bMKm2PjfU9p8ANtqvGa2LuyWn4rj5PVdtjY/Mq5Abb1cHGRUuoEYYg4eNdhvbY8xHXJtphjS1wUz/9MbCVeQ/eHpvyXHBr7DRuJZJ3fvnhQz5vj03Nq1hHW24Hx2gUVT99mxc7RBvzs5Ar7CReqcV2vvnG4R2w8RRA6BpbjjvYr3+HPnR4D2wMbcD9GWE7fW5sfOzwDtjTwLga9chz1KCDHN4DeygUiO3iaWw45Nvj7oHtlvM6wrY/OhYpFbQzdrX7RuzzwSbu8NqldMGWK+zdnP1eLwHvgu0XUMA2b/gOtXF4F+xSXcywX2o+SYiOg+JFS4CvYmetdst9sBc7f4EtRl2dW3fBXpLHF9gj3KebuTth6++jjRGfU0ofbGcrbPvNQfB0gbFTtH2FPVj9xUmw7Yk9xAr7BnXCdpOhbzsFNg2PUyv56b774TW/H6ntmXv9RVMqCOoGaYWe64E9Z+4brpPglZI+2IO9nq2P1R5b3g8telzBTHf5oxjltmse7+StvFmux63o3rdTWSwWi8VisVgsFovFYrFYLBaLxWKx/n39ARgQKOEBbup7AAAAAElFTkSuQmCC",
        nome: "t-shirt",
        quantita: 3,
        prezzo: 10
    },
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAJ1BMVEXMzMzy8vL19fXU1NTm5ubj4+Pc3NzY2NjJycnPz8/u7u7q6urg4ODLWUWRAAAEnklEQVR4nO2a23ajMAxFwffb/3/vWBJgQyChBJvOjM5TSrOSXfVYkmUPA4vFYrFYLBaLxWKxWCwWi8VisVgsFut/l3PuaYQfKyNLY+xfBe6cNzqGUYzyr+HOzCmMGRkUfz22B2N4aaIAjaTgn8b6oBxkaXUoxCT7NNc7kZmzM8RkjnHGT0+jHSnnOZniEl6ByDFZjdzqabx9TWauqYO2kLKdgadBPk24Fq2/lZnzq6iNnKuM/H3mXsxckEXIyHXi8OAc8XvMnQugDsXIxJzkS65L8Cv1K1Kg97D+1lkuaLnbf1j8rX+YG82swljcnF+AM4aDUigDhPtRc0NnpGJYrb+MbP3MDEVyG/KILnmqvkMBVIFQS86A9Vc4PSRvtY6s07hkn8HOZsYsJ2gNAnpMkzEq2yp4iwgrcEyBwnfmzma22cy1l0XImdnvrD81v2dVXsa+KdCDM2RScayrSY6yeU1zKLO8qW5VXexa33M07ZSZi6LxxxstVap7lVem+l6eNLSL9xbNvOlAySOH2n/T9lGz3Y5NK2PcLBHaYKux9nID7ibUsq4mau473pnjpJYYtKB2dv70nJmdo6QWlNLfSikFFTPDt8AePEEnysyALaJ3t8hjpW+DPWCijVNuxmibmxYR/idbYUOLPMbpB8K+66NbYks04FSgv8GGLnv1f3K2nbcHj9ljQr2ObSKs6lUf0BYbqrTQ9IVXsb2inVqsuZtiDwk+PNDrq9g0IQHu6mFbbNr/kbkvYssymaq677bYaG5BWe8Sth9MKbXVhqwtNrWg0YEtL0Y7lWamG7ajhv96tIc62rpbtLG+kymvenvZYAjbDduhudPck1zJJLNLhKr2yK2xMX3Fb7C9pryt+uXtwWHPHQ6W5MlDO5urJMweKu7G2DAlEES7g23GeGo49jqhao5NI7BhD1vCBOdac9Ucm5pXv4et8avTlRa8Obac6/sG209lO6+1CwOP5th0CmB2oq3mHmksCfns9Lo5NnZwYO4tti1Vuz64k+bMKm2PjfU9p8ANtqvGa2LuyWn4rj5PVdtjY/Mq5Abb1cHGRUuoEYYg4eNdhvbY8xHXJtphjS1wUz/9MbCVeQ/eHpvyXHBr7DRuJZJ3fvnhQz5vj03Nq1hHW24Hx2gUVT99mxc7RBvzs5Ar7CReqcV2vvnG4R2w8RRA6BpbjjvYr3+HPnR4D2wMbcD9GWE7fW5sfOzwDtjTwLga9chz1KCDHN4DeygUiO3iaWw45Nvj7oHtlvM6wrY/OhYpFbQzdrX7RuzzwSbu8NqldMGWK+zdnP1eLwHvgu0XUMA2b/gOtXF4F+xSXcywX2o+SYiOg+JFS4CvYmetdst9sBc7f4EtRl2dW3fBXpLHF9gj3KebuTth6++jjRGfU0ofbGcrbPvNQfB0gbFTtH2FPVj9xUmw7Yk9xAr7BnXCdpOhbzsFNg2PUyv56b774TW/H6ntmXv9RVMqCOoGaYWe64E9Z+4brpPglZI+2IO9nq2P1R5b3g8telzBTHf5oxjltmse7+StvFmux63o3rdTWSwWi8VisVgsFovFYrFYLBaLxWKx/n39ARgQKOEBbup7AAAAAElFTkSuQmCC",
        nome: "scarpe",
        quantita: 1,
        prezzo: 50
    }
]

//localStorage.setItem("test",JSON.stringify(prodotti))

export function Cart() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 p-6">
      <div className="w-full lg:w-2/3 space-y-4">
        {prodotti.map((p, index) => (
          <CartCard key={index} img={p.img} nome={p.nome} quantita={p.quantita} prezzo={p.prezzo} />
        ))}
      </div>
      <div className="w-full sm:max-w-sm sm:mx-auto p-4">
        <Resoconto prodotti={prodotti} />
      </div>
    </div>
  );
}