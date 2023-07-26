import axiosClient from "./axiosClient.setup"
const { get, post } = axiosClient
const gv = `SmallTMS/GiaoVien/`

export const GiaoVienService = {
    BCC: ServiceGeneratorDM_Filter('BangChamCong'),
    ThongTin: ServiceGeneratorDM_Filter('ThongTinGiaoVien') 

}

function ServiceGeneratorDM_Filter(opt) {
    return {
        Get: (data) => {
            return post(gv + "Get" + opt, data)
        },
        GetList: (data) => {
            return post(dm + 'GetList' + opt, data)
        }
    }
}