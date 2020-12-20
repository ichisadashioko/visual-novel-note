import urllib.request
import argparse

parser = argparse.ArgumentParser()

parser.add_argument('remote_path', type=str)
parser.add_argument('local_path', type=str)

args = parser.parse_args()

print(args)

while True:
    urllib.request.urlretrieve(args.remote_path, args.local_path)

    input_str = input('q to quit. any others to reload.\n')

    if input_str == 'q':
        break
