import torch

# Check if CUDA is available
if torch.cuda.is_available():
    # Check if mixed precision support is available
    if hasattr(torch.cuda.amp, 'autocast'):
        print("Mixed precision training is available.")
    else:
        print("Mixed precision training is not available.")
else:
    print("CUDA is not available. Mixed precision training requires CUDA.")
