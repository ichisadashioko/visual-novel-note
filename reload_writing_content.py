import urllib.request
import argparse
import io
import os

parser = argparse.ArgumentParser()

parser.add_argument('remote_path', type=str)
parser.add_argument('local_path', type=str)

args = parser.parse_args()

print(args)

response = urllib.request.urlopen(args.remote_path)
bs = response.read()
res_len = len(bs)
# print(len(bs))

local_filesize = os.path.getsize(args.local_path)
# print(local_filesize)

if res_len != local_filesize:
    print('writing')
    open(args.local_path, mode='wb').write(bs)
# urllib.request.urlretrieve(args.remote_path, buffer)

# while True:
#     urllib.request.urlretrieve(args.remote_path, args.local_path)

#     input_str = input('q to quit. any others to reload.\n')

#     if input_str == 'q':
#         break
