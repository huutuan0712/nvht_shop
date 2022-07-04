
import moment from "moment";
export const formatMoney = (T) =>
 T.toLocaleString("vi", { style: "currency", currency: "VND" });

export const formatDate = (T) =>
 moment(T).format("DD/MM/yyyy");

export function removeAccents(str) {
 var AccentsMap = [
  "aàảãáạăằẳẵắặâầẩẫấậ",
  "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
  "dđ",
  "DĐ",
  "eèẻẽéẹêềểễếệ",
  "EÈẺẼÉẸÊỀỂỄẾỆ",
  "iìỉĩíị",
  "IÌỈĨÍỊ",
  "oòỏõóọôồổỗốộơờởỡớợ",
  "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
  "uùủũúụưừửữứự",
  "UÙỦŨÚỤƯỪỬỮỨỰ",
  "yỳỷỹýỵ",
  "YỲỶỸÝỴ",
 ];
 for (var i = 0; i < AccentsMap.length; i++) {
  var re = new RegExp("[" + AccentsMap[i].substring(1) + "]", "g");
  var char = AccentsMap[i][0];
  str = str.replace(re, char);
 }
 return str;
}