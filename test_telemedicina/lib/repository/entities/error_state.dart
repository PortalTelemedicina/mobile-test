abstract class ErrorState {
  final String message;
  final int statusCode;

  const ErrorState(this.message, this.statusCode);
}