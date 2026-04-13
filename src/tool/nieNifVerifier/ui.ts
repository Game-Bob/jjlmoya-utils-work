export interface NieNifVerifierUI extends Record<string, string> {
  labelInput: string;
  placeholder: string;
  typeNIF: string;
  typeNIE: string;
  typeCIF: string;
  msgValidSuffix: string;
  msgInvalidControl: string;
  msgInvalidNIEControl: string;
  msgInvalidCIF: string;
  msgIncomplete: string;
}
