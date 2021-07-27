export default function (fullName) {
  const splattedNames = fullName.split(' ');
  if (splattedNames.length > 1)
    return (splattedNames[0].charAt(0) + splattedNames[1].charAt(0));
  else
    return splattedNames[0].charAt(0);
}
