import {StarList} from "./StarList";
import {Link} from "react-router-dom";
import {AddToCartBtn} from "./addToCartBtn";
import {useState} from "react";
import {BsCheckLg} from "react-icons/bs";

export function UserBasketProduct() {
    const color = "333"
    const sku = "Rec5NBwZ5z"
    const brand = "Lliddy"
    const [productCount, setProductCount] = useState(1)
    return (<>
        <div className={'col-12 p-3 rounded-2'}>
            <div className={'row user-basket-product shadow p-3'}>
                <div className={'col-lg-4 align-items-center d-flex'}>
                    <img style={{height: "18rem"}} className={'w-100 rounded-2'}
                         src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhUYGBgaGBgYGRoYGBgcGhgaHBgZGRgYGBocIS4lHB4rIRgYJjomKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA/EAACAQMDAgMHAQYEBQQDAAABAhEAAyEEEjFBUQUiYQYTMnGBkaFCBxRSscHwYnLR4RWCkqLxFiPT4jNDc//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQEBAAICAwEBAAAAAAAAAAERAhIhMUEDE2FRIv/aAAwDAQACEQMRAD8A6dbVXItFtp6j7qqiPu5FR2UQq05SqKQlOEq7bU0TNBSqVPbRjWcVQ6xQV7aYCpUqBAVJWqE0zNFMBFts1C6OaAva7bVN/wAS8kjkc1ZzU8oOtcxRO2udteJE+k9+a19DqpMbhNXrmwnUrUZIWgb1uir99REmq1eT6VloLp9KWORRj6cCrEbtTu9SgVrVZ+pcAxRmrvGCFifWsbTB3c70jPNWT7S0mXccUq29NousUqaYsuVACkrVNaiqylTC1KKU0RXFWItRamRjxVBSHvVN3NWFSBQzXMxSCLCKSmrNwIqSRFUVsk8UJq3Cjc7BRIEkwJJgD5kkD60durD8e14RFLKSDdspiOWuoOvzpEqjVPGaxdRq2nBiurvaUOpBEj81geK+HbBuiJP29K9H4+udyuXfNzWd+8Ex/OtbQBAwlsgdWMg/3FE+zmmV1JKgkGOK6JbK/wAI+wqfk7kvjhxz63QunQvBPTii9tSXBimdo9a899ux1MVG88A1BfNBA5MUba04jPNPgY+k0bsxdmw3ArUt6fIq0ofpRVi3ApbpJiDpApVO4KVZVhKatVqpAqVaReGp9tVKatDVBBqdO4p4pLVF6PPNU6myCZFWpnFGNZkcU+BjIY5otIIqGs0DT5eO1WW7ZVYYQRSit8Yrw/2x8fuPqbqC8RbS5CoRwyQCfKP41J+1e13XJIArwn2t0DWdXeRwJNy5cWOCjszqfs0fT0pfUJNeh/s38bfU27y3HLujq0wAAjrCgfVH57iug8Rv4KQJg/EPpIrk/wBlGjdUvXiAEuG2qevu9+8x0EvH0NdprNCj9YMYq82btZ6nrIo9lkG1lnMz9IH+9bzLFYnh2n90CZ+o6zRuv1qou4NkdO/pWuv+uvRz/wA8+2k9qBNY/virMWiOPStTw/VG8gaIkUNr9GIaBJ9azPVyrfc2KNN4iPhHftiK0rN/dxmhLWlRViMCjUc4CoadZ9E37FpbxmrFECo2WJ5EVNjWGlLUqkRSoMHbUttWbafbWkVRVirTxTGgc0hUaQNAWpn50RauGMxQAapo9BpJcnFC6tAOuaS3TGOaov3tuGMmpIM9nh46145+0B92vuyZ2qq4z/8Ar3cdvNz6V6r4hqfOCDAn6V5F7W39+rvEZ8zDAiNqFMmPNwPl6VrqZE5vt3/7Obg/c1X+F34zyQ4OOvmzXX6ZAZLH5V5t7A6wiw6ggQ5MKIHwKsep8oz1z1ru/DNVuETJrc5vjrPlPLGsmg3Z6A0B4l4duYKDE9+B61uaa4IgVK5YBYGuc6srVksD+HaZbaQsgUntl3AXA5NFXEVVHP0qjTqSxg/TMxTftcONKF9aJs0QyCKoK1FTLdqccj1pgtWIkVBFkzSqxjAmlQYrLTbTQx8SWDiCOM80NqvFpAC4mCY6elbnNrN6kaZRuam7eXj8UNptTIlTj++lV6nUMOBTPZp3aKSqOaqOeautpHFFPU1olNGSJqDWYqCVtqA8Qsqx8oO48sOPrRhQioICAexzVlwrkdTpW3EEkwZxxjrXknij7rrtJILXDHG2Wc9uM/mvfNcibWZoXynJ9PWvn/UNO07wZTcDEfpJKkehPPetd9bIzzzldN7GPIdSeNh44y/lHf8A3rutBqNnHpyM9Y/pXAexhlyAeUkKMlQH/wDtivRPDdITfRNpg+b7DE/iu3Nnh7cepfP06vwo+UEiD69aPZsxQt1SgBIgVBtaCI69K82a9HwbW+Loh2EEnjA6/Oo+G60O8QQe0dIJq/SeGqQWbJYyaLtWgGgD1pbzmJ7ERNQKVdSrLSsiOlIv6VZUCQM0FTgnmlTXX7Yp6DgdQ+aFZjRbAcSM0Z4f4GbjEMxX1j+lezy55nt5LOur6DeHalhPb+RrX02VmZmm0ns23LOAJ4+XrWzp/ClRYFce+ubfTtxz1J7ZgIHMVK3qBPE0Ve8NbpQ66FwePvWPTfts6W/uHEVYbYNAae00xP8ApWmKw0BvW4nihRjnNaGo7dxQTaYnMx6nirByftcCbVxw0KiOxEdQpgCvE9TpHtmGAJKboBkqCrRPY4/lXuHtwyroL8csoQHiS7qn9a8n9obO2+6Bg5CLL8buZkxmJAnOAKvXWzP8STK0v2a6V11QkDa9q4AexDIxB7HBn5V7V4dpBbXuxyT/AE+VeRexC7L2iuBgFa7cTaBElkcAnyiSdvI7d+PYNXe2KWpv1D+1cW3fFkCo3rCuRtHH4rDTxVi4G2Z4M4I/pW9pbk5q3m8pOpRqLtEdqqTLSDxVrOIqu0BJIP06CsNCKVKlQKq7rQJNOzgVW9wEUAly7mlSYClQcXphLgngGfX7V2HhuoDEk9OJ5+lYI8KA4b6xkGjtJbKmZJaAMxHrj7V6PyXnr4ceJefl0DEQf9PvUVviYn6VRYI6tLfgfKme/tNed2FbuY+lRKmZnNCe8nIxVLOaA9UI5pG6RiIoAXiOtXXL0gUE31EHvSe7uUg8EEEehoRnpg9Byn7RlRdLbTdAuai0jSTCpJLNjMYz868z8btp78hERAESIfcHUbyzFoEt0A58sYwB33t/rgt/RoQSoZ3ZQNxaAAoiROfXqa8+9oLrveZnR1IQEKA4CW1QxtB/R5iTGD5vWpasbHhpt2xpLu1EdNSgw8u6l2BLIAAhgAmYJjjmvUvaS6VEenHWvJ72sZdEVa2VIffbfaTIF4OxLFsD4iMEDHBr2C/4T+8ol0sQTbQqvTIDGepmYrf47J1tY7l8cjj/AN5aQZyBArZ8G8ZcND+YH70NrvB3Q5U84PQ9gPWqNHaKkyDMf3Fezrx65eXny569u5F8sBAIFEoIMxyKz/DbnkyJ+lHtfCgRwa8V9PXBVKhk1QNRbWqDBqKnct9aqdo4ofV64EQKe2w2jNBYIJz+KVMCKVAK9mYH/mn0mj83mJHB459PStW3aApyM/1q+SYFu2QuV5oW9g+ajnyPKs5oV0dswaQqm5QruaLa5A+VV7lb50FCN1q1npwgpyBUVUWqO+pOKC1erS0u+46ovdj/AC70HBe1+sH/ABDMn3doKuAVBYxLyMCWI78ZHNcZ7Sahrl2Dc94VA84MTj4QcSeegBmm9oNY929edZ2XHJ+GSw3B1AxiDH2+YrK2qYlSIUHAEEwCR85MT6VFdlZe4+kYks6Mrwu0bkaNxIkfDuIJIJiTEHn1T2H15fRWGJMhAv2+GfXbt+9eKeFeOvb2qVLptPlIB2k7xIJna2Sd3OTxJr0D9l/jNtLR07vD7wyhsbpVVIU8YI45yTxSFemu4YQR0iuRveF3A+1WBkbpBIAE9a6c3MZoC853kgeUgQfUc1046vO4x1zOvldoDsSCQzd8x9JqOo1M5mg7uois2/qjWb7q/DTbWRQt3Vz1rKe+e9Q9561cNatu9Jkmjk1E1hJcq23eqDohdnrSrIt6ilUV2Fq7PNJ1J+XWrJAoW7qwDigIUBRFVXboIgUKb+6qbrmKCi99frUbSAGare93pvf9qqNBVESB86i4BqmxqjBB60r15SIC7jmkhqjUX1WZIxXk37VG36iywZgnunETgMryWjud6j6Cu7vu9ydqYnO0fzIrgfb+6qsltwQwVmODIDEY9PhB+grr1+OTnb8uXP5Lesk9OGCAkQzZMdfkJ7UxRf4j+fxRdsoDP8ILcHpmYnOapV7X9hvxXn16MVBBE7m5jr/Kky4JDMYE8n+dE22tlWA7Bs7pwY5/5qladAwMSOohoI4IPzBj600x9HeEWXTT2UclmW1bVmPJYIoYn6zVV9SJiidPqRctpcX4XRXX5MAR/Oh2etMs68T1oK8k1rXLM5oe5pvWrqYxrtuKrKHmjtTpieDQz2SKupilbhFWre71Sy1EsKqj7d8UqzDcpVMTXpb3O9RSPT60O98GmW9WGhRYdqrvCOlCXNWDVb6oxE1QQdMhHH5oVtIQZWp23Jou0Dz0oBremYgTijLNhJggz371B7mfTv0qJ1UcZ+1Adst21OABknt3JrwD2xutqWfV7dqC/sXEHzIWWRyAEtW+kSx716d7Z+Me705U/FdbYBP6Yl+Om0ET03V5v7UWFt27SMz+8uB9RdUrBRnjYFB/SNhU9OtSrHG3AAjtmTC/c7if+3j1oxNNZ2ICyBv1sb07v4lCgeUjGeD3MVLT6BX91b3HdcuquI4dkQfXP469PerfssmB+8XscY0//wAVJcSzXgWt09tbqi2ybXUqVS4LmxiIKloE5IM8djyBRd2bQEwBz5t24yRuAgFemCTxXpX7VvAlsrp7y3nfzsnmFsRKBhBRFyfdxma4V7UK53TtbdnaQoaAARE7QAfNMfCAMzU1ceq/s98eV9MyOdrW2YQf4W80D5NvEdABW7avyu4dSa8o9kNStu+qMT7u4xRWON28xu9POowehNenWgZCBYUYnua6cyXn0xbZ17+Bh1S9az9Tqx0q65pcTQdzSGOKihX1cdaFuawmr7mgNBvb6RV9J7QbUmqbl6nuiKGdqqJNdpVQwNKg9Fa5VRc1UbtQa5UaXF6feKEa7VZumg07d+OtFLqsc8VghzVqNTE1tfvYIg5qt3X9PNZlwkKxBg7TB5gxgxXl7e3GuDm25tIZ2lijCMfEM9RBGMyKnwvy6n2g1I1d5tOjhYITcdpCKhDuwnBLN5DyI24PThPaS81y68MXbcUkmSQpKwCckeWZ7Gibd/VWkZkCBbivDZJ2hvNsLDG5jHqRzxWA10o2ADGRDHqPl8qy3HT+yWjnW6bClRc3z1220lRHbchr2t9TNeNexfh2sbUMdOtnfbQpN43NmTJA2rO6d33Ndu1nxcAE/uGSy86jlSQf0+lIlQ/aXa95oi3Pu7iP+dh/DmvN9AhZWtkSGR0BCB2DDzKeR5YGT8677xTR+K3tPeR10RTawbY14Odo3eSRE4xPWvL7huJEgiTg7iCGXkceoH/ipSNTSeUJqCUZVm2LYI/UgO6OcbgdwkeU8RXrvgfiHv7CPILRtc/41wT6Thv+avCjqWRjCiXJ3eYkZyVkiY7j0jvPQ+G+02o0SNs9wwZ4YFmc7pfzAAgdMx024q/B8vXbhNVBHNcx7He0d/WI73lRVUhU2KwJOdxO4nHAx1Brom1UcVplYwA5NB3biio3dUT0ms3U3p6UkNLUuh6UA+0UneqHNXE1aXBpqo3U1XEdfupmNUPcqK3s0XRKpNELpDS0DqCJIE9YmugRUP8ACSBnj71m3CTXNXEK80kajvFL6EwufXvWarirqqvHwTpb8MVPunIYciFJ/pH1rxly5MswJ6naOkR/KvS/a7xtQn7suS8byP0pzt+bfy+ded3LZ3SobbnB59I6f6+nTn1W+Z6C+cxkcdulMA3pn/D0/uKJS2wgkE54AOZiCPzM1WbLR8JmfXj7fF6cY+7VxNNbfUkrcZSW3SGcHcJhpB5yc+pqz/iepkt755MSd7yTjkzmqWst5sHnyzPGfixj6elRNps4PCxzM4ncIwOc/P6TQSPFtSBtF9wonAdwJIzjdQr3Xb4mmJOdx5n1p/dt2PBn4pmDwIyPX5fV1tnyyD2MEmM/px5vr/vTRTBxIXnsfT/ekoPZe/FEWkMQR5pJHMQIkSRzyc/jpH3bQYmZxzHzJjB/HH1umPQv2RaZ7t67vfyJaAVAMEs+G+Yg/wDVXp9zSIgyua8d9h/Fxo7guktDEpdUgzsOVKgcsCAfx1mvX9VdDKrK4dWAYEcEHgj0pKlgS6iHAFCX/CQ3+Gpu+e1ONSxPM1phmt7PndyCKzdd4UVJyD8hXV27nenuBW6Z9KeVXxjg20Z7U9dZc0oJzSrXkmKBpQcP+Kg/hYPwsR865rwH25sOANTNtgMsoJRjn5leB35ruNNr7NxZtlHAMbkYMJ7SKz5f4eLNXwthy0/Kj7elAWAxkiD/AKVJn7VSX9au2p6ga94c/wClh9SayvE0uWwACpdyQiyenLNAwoxJ7kDkitvU65LSM7mEUST1PoO5PFedeNeOo5FxfPdbhdxKRJCLAIEKCTP6m58uBL1npZzvty3iV51uurhWYMdzAlpMnr1/3+lUWtSWYDav5kDqSZxFa2p8BdLS3HdJctC7pb/NxkfzkfKsxP8A21kwCecA/wDKO9YuOk097cx2glVgqRjzDoyhfmPTio+7AkEknbByZhRIO1cxj8Ghb2qZgdvlA7HzZPfnr+a0PBNGwQ3iAFG4oX2lHgAXECc3GgrC8YaZ4qyJelL6za0Q8na0QATIEepmR0pv3i5H/wCK5HE+b5/w8x+KKbVXLa7F92CquoAVd2Wy20Z3EEEFhgTgQKS+J6okn3Z5mPdtEQQVmZgwZPMyZmr4xPOhP+IEGGDqZOD/ACzHFT94CPiI8oGSy4bM58uanc115sOoXysJZNkkxBEkDd8PbGMinbSM5YAKN0nygKWggbUXdteWEhQTME4OKeEPK/aoq4Mq5kgDPRRiexOB2696tvXfKG2kSTIbBBHf5wazEd0YoZEEhkI4IORHQyKP0+oV8Rzypgk/5flzFZsxqXUG1kfo/J/s16X+z7xZ1tIlwbbbsVsndO1uqHsrGY7GR1FedaHwu4xbaFIBG0yAGnjB5mKM0upezNt9yqzTIbHBDKQJEmRnoRNXP8S36r3N9MSTMAATNCEgVz/gHtD75SpYl16nl14DGOT0PrnrWwdVIitRmrGuVFdRFC3NSACWMAcn0rMb2g0wBPvVx9z8h1pcnyjobbyc0q5b/wBVW4UqCASJZyFCjcR3kscY/wAXoaas7FeTq1FeH+I3LJ3W3ZG7qfwV4PQ5HSg6eojvPDv2huAFvIHyBvSAYjJKnBPyiuw8P8atahdyOrRyOCvzB4rxOaZn4pLYfL0jxvxxXfzKSiKSgIGx5EByTyTwoGYk9RHIWFRmZmYIxzuz5I4QKIBB/nQdrxF9wLktHrB4OfUjNH3dVbeFS3sABljBdj3JjGTV1qfxTqdRw5YsFxk5Zuw9B/Oe2aE0Fx1F0ruDmLan4nCmGIUGdozJ9Dmo20F1lQAwGCyBMTgfc+YnstFoiK7Ku/aiwxIO7aMsQP0DiZ61ZPter9BfERCrbCLukM3JcfpVWM8GZgehrd8E9mrlwACEUGCc5IkGSILtkghSFj9RIioexvhJ1F17jbhbUjqfMTMJPcKeR0Y98elDaiwNoCiOgAAwAOwrUYrB03slZQQJb54X/pWAfrJ9aJ/9OIPhS3H+RM9+la9nVKwwwb5EEVNb0VdsTI5657Nqce7Vf8kqf+yJ+tZWp9h7mTZJ7kEKCfphXPoQp/xV3a6iDzVbayTAYE+hE0ttJJHi/iuj91dUlOTuYHcVJU+ceY7j0LKcgyOKO1uiF63be1aVNh2MymNzNlACIDEfDJgyQJMV2/tb4SL9tmQf+6o3CB8ZUHaI/iyQD2JHaPM/D9eU8jM3u3G0w8Bcgq0QfhPmjrWcalG+HXAzKt0HBhsAEggSRIw0QfX60Z4h4eglhcLoSOrBziQw3d+scZ71jKDt94W8yvtK/wCUCI9ImB02H0rY0motuo3oXE4ggMM+ZZxAPP2rPw18+0vBdQtokqYdWUi53Wdp3DtkA/OvQ/D9Ut5FdSZPK9QY4/voQa8sv6tFY+7Vgqny79u8dwSMdx1++aR8auwUDlFYBCF6qJgE89Yx0xTcZuV6D7V3rAtFDqUVs7k3AsSB5VhZIyQeOlebC4QZBEA7hkDM4IB5oRsfeqppm+z01reqVSSBuWWgMAfKcDcJ5gnrz3zSrMR6VTA809VBqfd61cROo9aYPTgSCekx+OKYJKauW5Ct3JAHrIPPyE/9VVhDk7W+xqU4APzz9p/FRYgl5kMqzKQZlWIIMcyOtXPr3K7CRERhQCcyZYCTPUnmBNVCzu6gfc1W6R+oHP1+daV0PhvtPcs2wiFcEkyo5Jkn+nyArTteP3b6EOQIkwFIkAehyM/iuR01ncC3mxxAx6yelFsrL8JU9CAZPY/6VL/hHT6DxJrexwVVWUFxDRE5PxcwOa6DTe0mnbd5wu0BjvgCCYxnJ4+4rjLN9ANrKrEDgchYkz96qS0kSUQeXJKhf5mkti2Suyue0S3AVs9sscxIjG1pB9axE1b22d12hrZDT5vNn4T5uMZFZuiuohIAUSFkoQOueDkZFJlljLQWgN5pHPbr3ye8Vm7asyRraj20uoY2py3Cnpjq3WuJ8Rv+8d32hdzFoXgFjLAekyfrRupsxIJnMdJn65oJLBYhV5J64H17VqVkaPFnYuCqDdBMLEMCMjtJDSODvbvQTucAYHp86jbtlSfqKTcY71L8spqe81Ec+lSCmJqvdQJzVa81JyDUEqxVi0qrY0qYLktvMbTn06c/1qR0TTgHp+aJ3sep+9PBrPmaobRNzH0oe6pWV9fpR4SphKz+xNU29S5HxHPr1qprHqPv9Y4ozYKkFHap+w8qB06gtmVWckZIHBjvSfB4EQem7PPBEdKP2jsKW0dhT9n8PIIstlhieMA4EYgAfjvV9h9nmZVIEGMmYHH1IGas2jsPsKfavYfan7DyR1Dhm3IioO0DGBPzzNU7T/ZP9+tEhB2p9o7VP2U2h0kMDAgGYwOOMx+KNOpScW2j/wDo/wDr/WqYFNtHar+2pp9RcBB2Bw3Ql2weh5oO6DIIkmZO5p+Yk89KL2iltFP201n3kMfDnPHrER+aSWZBIXOIk+okZrQ2jtTG2DT9i6il9lXkQCF8yiYiJx0AA9fvWfbukrt7TEjvM/OtBrQ4qAsKDIUSPSrO4ug20+B3g4jrOJ+c/iq3tGcdhP2zWobjTPy/GRzUv3g9Y+qitef8NZluxuOWVRBJLHt0Hr6Uq0m1IJyiHtI4+VNV84vpUKkKqDVINXGxlbTTUJp5+VTGVgNIGq5pw1TBaDSmq5pTRpZTioBqluoHmnBqINIvQLdTk1Emol6CZNKahupt9MZWTSmqw1NupgsmmLVWXpt1XBZvqJaoFqYtVkaSY09VFqVXBGpClSq0TPFNSpVBKkKelUZJqalSoHqRpUqjRCkKVKgakaVKoyalSpVoKomlSoGpqVKrAjUDSpVY0TU1KlWh/9k="}/>
                </div>
                <div className={'col-lg-8 mt-3 mt-sm-0 d-flex flex-column px-5'}>
                    <div className={"ps-2"}>
                        <div className={"row w-100 align-items-baseline"}>
                            <div className={"col-md-6 mt-4 mt-lg-0"}>
                                <h5 style={{fontWeight: 400}} className={"text-primary"}>product name</h5>
                            </div>
                            <div className={'col-md-6 d-flex mt-3 mt-md-0 align-items-baseline justify-content-md-end'}>
                                <StarList starScore={5}/>
                            </div>
                            <div className="col-12 mb-3 mt-4 align-items-baseline">
                                <div className={'row'}>
                                    <div className="col-6">
                                        <p className="p-0 m-0"
                                           style={{fontWeight: "500"}}>Available :</p>
                                    </div>
                                    <div className="col-6 col-md-6 ps-md-4"><p
                                        className="m-0 text-muted text-end"
                                        style={{fontWeight: "500"}}>Out Of
                                        Stock</p></div>
                                </div>
                            </div>
                            <div className={"col-12 mb-3 align-items-baseline"}>
                                <div className={'row'}>
                                    <div className={"col-6"}>
                                        <p className={"p-0 m-0"} style={{fontWeight: 500}}>Price :</p>
                                    </div>
                                    <div className={"col-6 col-md-6 ps-md-4"}>
                                        <p className={"m-0 text-end text-muted"} style={{fontWeight: 500}}>$2,000,000   </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 mb-3 align-items-baseline"}>
                                <div className={'row'}>
                                    <div className={"col-6"}>
                                        <p className={"p-0 m-0"} style={{fontWeight: 500}}>SKU :</p>
                                    </div>
                                    <div className={"col-6 col-md-6 ps-md-4"}>
                                        <p className={"m-0 text-end text-muted"} style={{fontWeight: 500}}>{sku}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 mb-3 align-items-baseline"}>
                                <div className={'row'}>
                                    <div className={"col-6"}>
                                        <p className={"p-0 m-0"} style={{fontWeight: 500}}>Brand :</p>
                                    </div>
                                    <div className={"col-6 col-md-6 ps-md-4"}>
                                        <p className={"m-0 text-end text-muted"} style={{fontWeight: 500}}>{brand}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 mb-3 align-items-end"}>
                                <div className={'row'}>
                                    <div className={"col-6"}>
                                        <p className={"p-0 m-0"} style={{fontWeight: 500}}>color :</p>
                                    </div>
                                    <div className={"col-6 text-end justify-content-end d-flex  col-md-6 ps-md-4"}>
                                        {color !== "None" ? (<span
                                            className={"text-muted d-flex position-relative justify-content-center align-items-center rounded-circle d-block"}
                                            style={{
                                                background: `#${color}`,
                                                width: "1.5rem",
                                                height: "1.5rem",
                                                top: ".2rem"
                                            }}>
                                <BsCheckLg className={"text-white fw-bold"}/>
                            </span>) : <p className={"m-0 text-muted"} style={{fontWeight: 500}}>No Color</p>}
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 mt-3"}>
                                <div className={"row align-items-baseline"}>
                                    <div className={"col-6"}>
                                        <p style={{color: "rgb(171, 122, 95)", fontWeight: 600}}>$2,000,000</p>
                                    </div>
                                    <div className={"col-6 d-flex  justify-content-end"}>
                                        <AddToCartBtn productCount={productCount} setProductCount={setProductCount}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}